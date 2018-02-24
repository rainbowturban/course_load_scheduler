package org.dselent.course_load_scheduler.client.translator.impl;

import org.dselent.course_load_scheduler.client.action.ReceiveRemoveCourseAction;
import org.dselent.course_load_scheduler.client.action.SendRemoveCourseAction;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveRemoveCourseKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendRemoveCourseKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class RemoveCourseActionTranslatorImpl implements ActionTranslator<SendRemoveCourseAction, ReceiveRemoveCourseAction>{
	@Override
	public JSONObject translateToJson(SendRemoveCourseAction action)
	{
		JSONObject jsonObject = new JSONObject();

		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendRemoveCourseKeys.COURSE_ID), action.getId());
		
		return jsonObject;
	}

	@Override
	public ReceiveRemoveCourseAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		JSONValue jsonObject = json.get("success");
		JSONObject userObject = jsonObject.isArray().get(0).isObject();

		
		//extract the information for the object to return
		//TODO: Check for valid (non-null) values?
		Integer id = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveRemoveCourseKeys.COURSE_ID));
		Boolean success = JSONHelper.getBooleanValue(userObject, JSONHelper.convertKeyName(ReceiveRemoveCourseKeys.SUCCESS));

		//Put the information into the action
		ReceiveRemoveCourseAction action = new ReceiveRemoveCourseAction(id, success);	

		return action;
	}
}
