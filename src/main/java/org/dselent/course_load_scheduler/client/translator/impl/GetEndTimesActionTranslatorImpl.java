package org.dselent.course_load_scheduler.client.translator.impl;

import java.sql.Time;
import java.util.ArrayList;

import org.dselent.course_load_scheduler.client.action.ReceiveEndTimesAction;
import org.dselent.course_load_scheduler.client.action.SendGetEndTimesAction;
import org.dselent.course_load_scheduler.client.model.EndTime;
import org.dselent.course_load_scheduler.client.model.User;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveEndTimesKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.GetEndTimesKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class GetEndTimesActionTranslatorImpl implements ActionTranslator<SendGetEndTimesAction, ReceiveEndTimesAction> {

	@Override
	public JSONObject translateToJson(SendGetEndTimesAction action)	{
		JSONObject jsonObject = new JSONObject();
		
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(GetEndTimesKeys.ID), action.getModel().getId());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(GetEndTimesKeys.PASSWORD), action.getModel().getPassword());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(GetEndTimesKeys.ACCOUNT_TYPE_ID), action.getModel().getAccountTypeId());
		
		return jsonObject;
	}

	@Override
	public ReceiveEndTimesAction translateToAction(JSONObject json)	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		JSONValue jsonObject = json.get("success");
		JSONObject userObject = jsonObject.isArray().get(0).isObject();

		//Server only sends email and password back
		Integer id = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveEndTimesKeys.ID));
		String password = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveEndTimesKeys.PASSWORD));
		Integer accTypeId = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveEndTimesKeys.ACCOUNT_TYPE_ID));
		JSONArray jsonTimes = JSONHelper.getArrayValue(userObject, JSONHelper.convertKeyName(ReceiveEndTimesKeys.TIMES));
		
		User user = new User();
		user.setId(id);
		user.setPassword(password);
		user.setAccountTypeId(accTypeId);
		
		ArrayList<EndTime> times = new ArrayList<EndTime>();
		for (int i=0; i<jsonTimes.size(); i++) {
			JSONValue tempTime = jsonTimes.get(i);
			Integer timeId = JSONHelper.getIntValue(tempTime.isObject(), "id");
			long timeVal = JSONHelper.getLongValue(tempTime.isObject(), "val");
			Time t = new Time(timeVal);
			EndTime et = new EndTime();
			et.setId(timeId);
			et.setTime(t);
			times.add(et);
		}

		ReceiveEndTimesAction action = new ReceiveEndTimesAction(user, times);	

		return action;
	}

}
