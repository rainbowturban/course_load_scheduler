package org.dselent.course_load_scheduler.client.translator.impl;

import org.dselent.course_load_scheduler.client.action.ReceiveGetOwnRequestAction;
import org.dselent.course_load_scheduler.client.action.SendGetOwnRequestAction;
import org.dselent.course_load_scheduler.client.model.Request;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveGetOwnRequestKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendGetOwnRequestKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class GetOwnRequestActionTranslatorImpl implements ActionTranslator<SendGetOwnRequestAction, ReceiveGetOwnRequestAction> {
	@Override
	public JSONObject translateToJson(SendGetOwnRequestAction action)
	{
		JSONObject jsonObject = new JSONObject();

		
		// not sure if this is right?? - sarah
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendGetOwnRequestKeys.USER_ID), action.getGetOwnRequestInfo().getId());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendGetOwnRequestKeys.COURSE_ID), action.getGetOwnRequestInfo().getId());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendGetOwnRequestKeys.MESSAGE), action.getGetOwnRequestInfo().getMessage());
		
		
		return jsonObject;
	}

	//@Override
	public ReceiveGetOwnRequestAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		JSONValue jsonObject = json.get("success");
		JSONObject userObject = jsonObject.isArray().get(0).isObject();

		
		//extract the information for the object to return
		//TODO: Check for valid (non-null) values?
		Integer userid = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveGetOwnRequestKeys.USER_ID));
		Integer coursesid = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveGetOwnRequestKeys.COURSE_ID));
		String message = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetOwnRequestKeys.MESSAGE));
		

		//Put the information into the object
		Request request = new Request();
		request.setUserId(userid);
		request.setCourseId(coursesid);
		request.setMessage(message);


		// possibly use builder pattern if it is a lot of data
		ReceiveGetOwnRequestAction action = new ReceiveGetOwnRequestAction(request);	

		return action;
	}
}
