package org.dselent.course_load_scheduler.client.translator.impl;

import org.dselent.course_load_scheduler.client.action.ReceiveStartTimesAction;
import org.dselent.course_load_scheduler.client.action.SendCreateAccountAction;
import org.dselent.course_load_scheduler.client.model.StartTime;
import org.dselent.course_load_scheduler.client.model.User;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveCreateAccountKeys;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveStartTimesKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.GetStartTimesKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendCreateAccountKeys;

import java.sql.Time;
import java.util.ArrayList;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.GetStartTimesAction;
import org.dselent.course_load_scheduler.client.action.ReceiveCreateAccountAction;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class GetStartTimesActionTranslatorImpl implements ActionTranslator<GetStartTimesAction, ReceiveStartTimesAction> {

	@Override
	public JSONObject translateToJson(GetStartTimesAction action)
	{
		JSONObject jsonObject = new JSONObject();
		
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(GetStartTimesKeys.ID), action.getModel().getId());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(GetStartTimesKeys.PASSWORD), action.getModel().getPassword());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(GetStartTimesKeys.ACCOUNT_TYPE_ID), action.getModel().getAccountTypeId());
		
		return jsonObject;
	}

	@Override
	public ReceiveStartTimesAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		JSONValue jsonObject = json.get("success");
		JSONObject userObject = jsonObject.isArray().get(0).isObject();

		//Server only sends email and password back
		Integer id = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveStartTimesKeys.ID));
		String password = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveStartTimesKeys.PASSWORD));
		Integer accTypeId = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveStartTimesKeys.ACCOUNT_TYPE_ID));
		JSONArray jsonTimes = JSONHelper.getArrayValue(userObject, JSONHelper.convertKeyName(ReceiveStartTimesKeys.TIMES));
		
		User user = new User();
		user.setId(id);
		user.setPassword(password);
		user.setAccountTypeId(accTypeId);
		
		ArrayList<StartTime> times = new ArrayList<StartTime>();
		for (int i=0; i<jsonTimes.size(); i++) {
			JSONValue tempTime = jsonTimes.get(i);
			Integer timeId = JSONHelper.getIntValue(tempTime.isObject(), "id");
			long timeVal = JSONHelper.getLongValue(tempTime.isObject(), "val");
			Time t = new Time(timeVal);
			StartTime st = new StartTime();
			st.setId(timeId);
			st.setTime(t);
			times.add(st);
		}

		ReceiveStartTimesAction action = new ReceiveStartTimesAction(user, times);	

		return action;
	}

}
