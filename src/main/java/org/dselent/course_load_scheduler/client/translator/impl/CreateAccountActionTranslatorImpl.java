package org.dselent.course_load_scheduler.client.translator.impl;

import org.dselent.course_load_scheduler.client.action.ReceiveCreateAccountAction;
import org.dselent.course_load_scheduler.client.action.SendCreateAccountAction;
import org.dselent.course_load_scheduler.client.model.User;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveCreateAccountKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendCreateAccountKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class CreateAccountActionTranslatorImpl implements ActionTranslator<SendCreateAccountAction, ReceiveCreateAccountAction>
{
	@Override
	public JSONObject translateToJson(SendCreateAccountAction action)
	{
		JSONObject jsonObject = new JSONObject();

		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendCreateAccountKeys.EMAIL), action.getEmail());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendCreateAccountKeys.PASSWORD), action.getPassword());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendCreateAccountKeys.ACCOUNT_TYPE), action.getFacultyType());


		return jsonObject;
	}

	@Override
	public ReceiveCreateAccountAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		JSONValue jsonObject = json.get("success");
		JSONObject userObject = jsonObject.isArray().get(0).isObject();

		//Server only sends email and password back
		Integer accountTypeId = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveCreateAccountKeys.ACCOUNT_TYPE_ID));
		Integer id = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveCreateAccountKeys.ID));
		String password = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveCreateAccountKeys.PASSWORD));

		User user = new User();
		user.setAccountTypeId(accountTypeId);
		user.setId(id);
		user.setEncryptedPassword(password);

		// possibly use builder pattern if it is a lot of data
		ReceiveCreateAccountAction action = new ReceiveCreateAccountAction(user);	

		return action;
	}


}