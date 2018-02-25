package org.dselent.course_load_scheduler.client.translator.impl;

import org.dselent.course_load_scheduler.client.action.ReceiveRemoveSectionAction;
import org.dselent.course_load_scheduler.client.action.SendRemoveSectionAction;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveRemoveSectionKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendRemoveSectionKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class RemoveSectionActionTranslatorImpl implements ActionTranslator<SendRemoveSectionAction, ReceiveRemoveSectionAction>{
	@Override
	public JSONObject translateToJson(SendRemoveSectionAction action)
	{
		JSONObject jsonObject = new JSONObject();

		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendRemoveSectionKeys.ID), action.getId());
		
		return jsonObject;
	}

	@Override
	public ReceiveRemoveSectionAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		JSONValue jsonObject = json.get("success");
		JSONObject userObject = jsonObject.isArray().get(0).isObject();

		//extract the information for the object to return
		//TODO: Check for valid (non-null) values?
		Integer id = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveRemoveSectionKeys.ID));
		Boolean success = JSONHelper.getBooleanValue(userObject, JSONHelper.convertKeyName(ReceiveRemoveSectionKeys.SUCCESS));

		//Put the information into the action
		ReceiveRemoveSectionAction action = new ReceiveRemoveSectionAction(id, success);	

		return action;
	}
	

}
