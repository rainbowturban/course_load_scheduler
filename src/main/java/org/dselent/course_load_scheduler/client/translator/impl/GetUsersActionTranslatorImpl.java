package org.dselent.course_load_scheduler.client.translator.impl;

import java.util.ArrayList;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.ReceiveGetUsersAction;
import org.dselent.course_load_scheduler.client.action.SendGetUsersAction;
import org.dselent.course_load_scheduler.client.model.AccountInfo;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveGetUsersKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendGetUsersKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class GetUsersActionTranslatorImpl implements ActionTranslator<SendGetUsersAction, ReceiveGetUsersAction>{
	@Override
	public JSONObject translateToJson(SendGetUsersAction action)
	{
		JSONObject jsonObject = new JSONObject();

		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendGetUsersKeys.ID), action.getUserId());
		
		return jsonObject;
	}

	@Override
	public ReceiveGetUsersAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		JSONValue jsonObject = json.get("success");
		
		//loops through each element in the list and fills an ArrayList with the info for each course
		List<AccountInfo> userList = new ArrayList<AccountInfo>();
		
		for(int i = 0; i < jsonObject.isArray().size(); i++) {
			JSONObject userObject = jsonObject.isArray().get(i).isObject();
			AccountInfo user = new AccountInfo();

			//extract the information for the object to return
			//TODO: Check for valid (non-null) values?		
			user.setFacultyFirstName(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetUsersKeys.FIRST_NAME)));
			user.setFacultyLastName(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetUsersKeys.LAST_NAME)));
			user.setFacultyEmail(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetUsersKeys.EMAIL)));
			user.setFacultyType(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetUsersKeys.FACULTY_TYPE)));
			user.setAccountType(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetUsersKeys.ACCOUNT_TYPE)));
			
			//Add extracted info to the list
			userList.add(user);
		}
		
		//add the list into the action and return
		ReceiveGetUsersAction action = new ReceiveGetUsersAction(userList);
		
		return action;
	}

}
