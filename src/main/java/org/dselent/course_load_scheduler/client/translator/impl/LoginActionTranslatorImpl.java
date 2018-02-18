package org.dselent.course_load_scheduler.client.translator.impl;

import java.util.Date;

import org.dselent.course_load_scheduler.client.action.ReceiveLoginAction;
import org.dselent.course_load_scheduler.client.action.SendLoginAction;
import org.dselent.course_load_scheduler.client.model.User;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveLoginKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendLoginKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class LoginActionTranslatorImpl implements ActionTranslator<SendLoginAction, ReceiveLoginAction>
{
	@Override
	public JSONObject translateToJson(SendLoginAction action)
	{
		JSONObject jsonObject = new JSONObject();
		
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendLoginKeys.USER_NAME), action.getUserName());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendLoginKeys.PASSWORD), action.getPassword());
		
		return jsonObject;
	}
	
	@Override
	public ReceiveLoginAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish
		
		// sent timestamps as epoch seconds (long)
		
		JSONValue jsonObject = json.get("success");
		JSONObject userObject = jsonObject.isArray().get(0).isObject();
		
		Integer id = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveLoginKeys.ID));
		String userName = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveLoginKeys.USER_NAME));
		String firstName = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveLoginKeys.FIRST_NAME));
		String lastName = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveLoginKeys.LAST_NAME));
		String email = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveLoginKeys.EMAIL));
		Integer userStateId = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveLoginKeys.USER_STATE_ID));
		Long createdAt = JSONHelper.getLongValue(userObject, JSONHelper.convertKeyName(ReceiveLoginKeys.CREATED_AT));
		Long updatedAt = JSONHelper.getLongValue(userObject, JSONHelper.convertKeyName(ReceiveLoginKeys.UPDATED_AT));
		
		// TODO look into time conversion more
		// put into JSONHelper?
		
		User user = new User();
		user.setId(id);
		user.setUserName(userName);
		user.setFirstName(firstName);
		user.setLastName(lastName);
		user.setEmail(email);
		user.setUserStateId(userStateId);
		user.setCreatedAt(new Date(createdAt));
		user.setUpdatedAt(new Date(updatedAt));
		
		// possibly use builder pattern if it is a lot of data
		ReceiveLoginAction action = new ReceiveLoginAction(user);	
	
		return action;
	}


}