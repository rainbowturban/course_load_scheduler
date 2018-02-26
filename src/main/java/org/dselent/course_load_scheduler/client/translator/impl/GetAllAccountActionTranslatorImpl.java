package org.dselent.course_load_scheduler.client.translator.impl;

import org.dselent.course_load_scheduler.client.action.ReceiveGetAllAccountAction;
import org.dselent.course_load_scheduler.client.action.SendGetAllAccountAction;
import org.dselent.course_load_scheduler.client.model.AccountInfo;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveGetAllAccountKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendGetAllAccountKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class GetAllAccountActionTranslatorImpl implements ActionTranslator<SendGetAllAccountAction, ReceiveGetAllAccountAction> {
	@Override
	public JSONObject translateToJson(SendGetAllAccountAction action)
	{
		JSONObject jsonObject = new JSONObject();

		
		// not sure if this is right?? - sarah
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendGetAllAccountKeys.FACULTY_FIRST_NAME), action.getAllAccountInfo().getFacultyFirstName());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendGetAllAccountKeys.FACULTY_LAST_NAME), action.getAllAccountInfo().getFacultyLastName());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendGetAllAccountKeys.FACULTY_EMAIL), action.getAllAccountInfo().getFacultyEmail());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendGetAllAccountKeys.FACULTY_TYPE), action.getAllAccountInfo().getFacultyType());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendGetAllAccountKeys.ACCOUNT_TYPE), action.getAllAccountInfo().getAccountType());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendGetAllAccountKeys.FACULTY_ID), action.getAllAccountInfo().getFacultyId());
		
		return jsonObject;
	}

	//@Override
	public ReceiveGetAllAccountAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		JSONValue jsonObject = json.get("success");
		JSONObject userObject = jsonObject.isArray().get(0).isObject();

		
		//extract the information for the object to return
		//TODO: Check for valid (non-null) values?
		String facultyfirstname = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetAllAccountKeys.FACULTY_FIRST_NAME));
		String facultylastname = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetAllAccountKeys.FACULTY_LAST_NAME));
		String facultyemail = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetAllAccountKeys.FACULTY_EMAIL));
		String facultytype= JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetAllAccountKeys.FACULTY_TYPE));
		String accounttype = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetAllAccountKeys.ACCOUNT_TYPE));
		Integer facultyid = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveGetAllAccountKeys.FACULTY_ID));

		//Put the information into the object
		AccountInfo account = new AccountInfo();
		account.setFacultyFirstName(facultyfirstname);
		account.setFacultyLastName(facultylastname);
		account.setFacultyEmail(facultyemail);
		account.setFacultyType(facultytype);
		account.setAccountType(accounttype);
		account.setFacultyId(facultyid);

		// possibly use builder pattern if it is a lot of data
		ReceiveGetAllAccountAction action = new ReceiveGetAllAccountAction(account);	

		return action;
	}
}
