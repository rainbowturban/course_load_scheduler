package org.dselent.course_load_scheduler.client.translator.impl;

import org.dselent.course_load_scheduler.client.action.ReceiveUpdateStatusRequestAction;
import org.dselent.course_load_scheduler.client.action.SendUpdateStatusRequestAction;
import org.dselent.course_load_scheduler.client.model.Request;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveUpdateStatusRequestKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendUpdateStatusRequestKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class UpdateStatusRequestActionTranslatorImpl implements ActionTranslator<SendUpdateStatusRequestAction, ReceiveUpdateStatusRequestAction> {
	@Override
	public JSONObject translateToJson(SendUpdateStatusRequestAction action)
	{
		JSONObject jsonObject = new JSONObject();

		
		// not sure if this is right?? - sarah
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendUpdateStatusRequestKeys.USER_ID), action.getStatusRequestInfo().getId());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendUpdateStatusRequestKeys.COURSE_ID), action.getStatusRequestInfo().getId());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendUpdateStatusRequestKeys.MESSAGE), action.getStatusRequestInfo().getMessage());
		
		
		return jsonObject;
	}

	//@Override
	public ReceiveUpdateStatusRequestAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		JSONValue jsonObject = json.get("success");
		JSONObject userObject = jsonObject.isArray().get(0).isObject();

		
		//extract the information for the object to return
		//TODO: Check for valid (non-null) values?
		Integer userid = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveUpdateStatusRequestKeys.USER_ID));
		Integer coursesid = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveUpdateStatusRequestKeys.COURSE_ID));
		String message = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveUpdateStatusRequestKeys.MESSAGE));
		

		//Put the information into the object
		Request request = new Request();
		request.setUserId(userid);
		request.setCourseId(coursesid);
		request.setMessage(message);


		// possibly use builder pattern if it is a lot of data
		ReceiveUpdateStatusRequestAction action = new ReceiveUpdateStatusRequestAction(request);	

		return action;
	}
}
