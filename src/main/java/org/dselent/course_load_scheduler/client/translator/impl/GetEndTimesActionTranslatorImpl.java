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
		JSONArray userObject = jsonObject.isArray().get(0).isArray();

		ArrayList<EndTime> times = new ArrayList<EndTime>();
		for (int i=0; i<userObject.size(); i++) {
			JSONValue tempTime = userObject.get(i);
			Integer timeId = JSONHelper.getIntValue(tempTime.isObject(), "id");
			String timeVal = JSONHelper.getStringValue(tempTime.isObject(), "time");
			Time t = Time.valueOf(timeVal);
			EndTime et = new EndTime();
			et.setId(timeId);
			et.setTime(t);
			times.add(et);
		}

		ReceiveEndTimesAction action = new ReceiveEndTimesAction(times);	

		return action;
	}

}
