package org.dselent.course_load_scheduler.client.translator.impl;

import org.dselent.course_load_scheduler.client.action.ReceiveStartTimesAction;
import org.dselent.course_load_scheduler.client.model.StartTime;
import org.dselent.course_load_scheduler.client.send.jsonkeys.GetStartTimesKeys;

import java.sql.Time;
import java.util.ArrayList;

import org.dselent.course_load_scheduler.client.action.SendGetStartTimesAction;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class GetStartTimesActionTranslatorImpl implements ActionTranslator<SendGetStartTimesAction, ReceiveStartTimesAction> {

	@Override
	public JSONObject translateToJson(SendGetStartTimesAction action)
	{
		JSONObject jsonObject = new JSONObject();
		
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(GetStartTimesKeys.ID), action.getModel().getId());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(GetStartTimesKeys.PASSWORD), action.getModel().getEncryptedPassword());
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
		JSONArray userObject = jsonObject.isArray().get(0).isArray();
		
		ArrayList<StartTime> times = new ArrayList<StartTime>();
		for (int i=0; i<userObject.size(); i++) {
			JSONValue tempTime = userObject.get(i);
			Integer timeId = JSONHelper.getIntValue(tempTime.isObject(), "id");
			String timeVal = JSONHelper.getStringValue(tempTime.isObject(), "time");
			Time t = Time.valueOf(timeVal);
			StartTime st = new StartTime();
			st.setId(timeId);
			st.setTime(t);
			times.add(st);
		}

		ReceiveStartTimesAction action = new ReceiveStartTimesAction(times);

		return action;
	}

}
