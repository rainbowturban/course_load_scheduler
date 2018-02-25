package org.dselent.course_load_scheduler.client.translator.impl;

import org.dselent.course_load_scheduler.client.action.ReceiveCreateNewRequestAction;
import org.dselent.course_load_scheduler.client.action.ReceiveEditOwnRequestAction;
import org.dselent.course_load_scheduler.client.action.SendCreateNewRequestAction;
import org.dselent.course_load_scheduler.client.action.SendEditOwnRequestAction;
import org.dselent.course_load_scheduler.client.model.Request;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveCreateNewRequestKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendCreateNewRequestKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class CreateNewRequestActionTranslatorImpl implements ActionTranslator<SendCreateNewRequestAction, ReceiveCreateNewRequestAction> {
	@Override
	public JSONObject translateToJson(SendCreateNewRequestAction action)
	{
		JSONObject jsonObject = new JSONObject();

		
		// not sure if this is right?? - sarah
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendCreateNewRequestKeys.USER_ID), action.getNewRequestInfo().getId());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendCreateNewRequestKeys.COURSE_ID), action.getNewRequestInfo().getId());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendCreateNewRequestKeys.MESSAGE), action.getNewRequestInfo().getMessage());
		
		
		return jsonObject;
	}

	//@Override
	public ReceiveCreateNewRequestAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		JSONValue jsonObject = json.get("success");
		JSONObject userObject = jsonObject.isArray().get(0).isObject();

		
		//extract the information for the object to return
		//TODO: Check for valid (non-null) values?
		Integer userid = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveCreateNewRequestKeys.USER_ID));
		Integer coursesid = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveCreateNewRequestKeys.COURSE_ID));
		String message = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveCreateNewRequestKeys.MESSAGE));
		

		//Put the information into the object
		Request request = new Request();
		request.setUserId(userid);
		request.setCourseId(coursesid);
		request.setMessage(message);


		// possibly use builder pattern if it is a lot of data
		ReceiveCreateNewRequestAction action = new ReceiveCreateNewRequestAction(request);	

		return action;
	}
}
