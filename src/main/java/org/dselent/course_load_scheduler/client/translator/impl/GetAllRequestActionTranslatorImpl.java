package org.dselent.course_load_scheduler.client.translator.impl;

import org.dselent.course_load_scheduler.client.action.ReceiveGetAllRequestAction;
import org.dselent.course_load_scheduler.client.action.SendGetAllRequestAction;
import org.dselent.course_load_scheduler.client.model.Request;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveGetAllRequestKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendGetAllRequestKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class GetAllRequestActionTranslatorImpl implements ActionTranslator<SendGetAllRequestAction, ReceiveGetAllRequestAction> {
	@Override
	public JSONObject translateToJson(SendGetAllRequestAction action)
	{
		JSONObject jsonObject = new JSONObject();

		
		// not sure if this is right?? - sarah
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendGetAllRequestKeys.USER_ID), action.getAllRequestInfo().getId());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendGetAllRequestKeys.COURSE_ID), action.getAllRequestInfo().getId());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendGetAllRequestKeys.MESSAGE), action.getAllRequestInfo().getMessage());
		
		
		return jsonObject;
	}

	//@Override
	public ReceiveGetAllRequestAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		JSONValue jsonObject = json.get("success");
		JSONObject userObject = jsonObject.isArray().get(0).isObject();

		
		//extract the information for the object to return
		//TODO: Check for valid (non-null) values?
		Integer userid = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveGetAllRequestKeys.USER_ID));
		Integer coursesid = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveGetAllRequestKeys.COURSE_ID));
		String message = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetAllRequestKeys.MESSAGE));
		

		//Put the information into the object
		Request request = new Request();
		request.setUserId(userid);
		request.setCourseId(coursesid);
		request.setMessage(message);


		// possibly use builder pattern if it is a lot of data
		ReceiveGetAllRequestAction action = new ReceiveGetAllRequestAction(request);	

		return action;
	}
}
