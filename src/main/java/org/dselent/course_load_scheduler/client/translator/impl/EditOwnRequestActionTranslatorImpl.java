package org.dselent.course_load_scheduler.client.translator.impl;

import org.dselent.course_load_scheduler.client.action.ReceiveEditOwnRequestAction;
import org.dselent.course_load_scheduler.client.action.SendEditOwnRequestAction;
import org.dselent.course_load_scheduler.client.model.Request;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveEditOwnRequestKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendEditOwnRequestKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class EditOwnRequestActionTranslatorImpl implements ActionTranslator<SendEditOwnRequestAction, ReceiveEditOwnRequestAction> {
	@Override
	public JSONObject translateToJson(SendEditOwnRequestAction action)
	{
		JSONObject jsonObject = new JSONObject();

		
		// not sure if this is right?? - sarah
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendEditOwnRequestKeys.USER_ID), action.getOwnRequestInfo().getId());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendEditOwnRequestKeys.COURSE_ID), action.getOwnRequestInfo().getId());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendEditOwnRequestKeys.MESSAGE), action.getOwnRequestInfo().getMessage());
		
		
		return jsonObject;
	}

	//@Override
	public ReceiveEditOwnRequestAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		JSONValue jsonObject = json.get("success");
		JSONObject userObject = jsonObject.isArray().get(0).isObject();

		
		//extract the information for the object to return
		//TODO: Check for valid (non-null) values?
		Integer userid = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveEditOwnRequestKeys.USER_ID));
		Integer coursesid = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveEditOwnRequestKeys.COURSE_ID));
		String message = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveEditOwnRequestKeys.MESSAGE));
		

		//Put the information into the object
		Request request = new Request();
		request.setUserId(userid);
		request.setCourseId(coursesid);
		request.setMessage(message);


		// possibly use builder pattern if it is a lot of data
		ReceiveEditOwnRequestAction action = new ReceiveEditOwnRequestAction(request);	

		return action;
	}
}
