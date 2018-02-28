package org.dselent.course_load_scheduler.client.translator.impl;

import java.util.ArrayList;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.ReceiveGetFrequenciesAction;
import org.dselent.course_load_scheduler.client.action.SendGetFrequenciesAction;
import org.dselent.course_load_scheduler.client.model.Frequency;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveGetFrequenciesKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendGetFrequenciesKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class GetFrequenciesActionTranslatorImpl implements ActionTranslator<SendGetFrequenciesAction, ReceiveGetFrequenciesAction> {

	@Override
	public JSONObject translateToJson(SendGetFrequenciesAction action)
	{
		JSONObject jsonObject = new JSONObject();
		
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendGetFrequenciesKeys.USER_ID), action.getModel().getId());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendGetFrequenciesKeys.PASSWORD), action.getModel().getEncryptedPassword());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendGetFrequenciesKeys.ACCOUNT_TYPE_ID), action.getModel().getAccountTypeId());
		
		return jsonObject;
	}

	@Override
	public ReceiveGetFrequenciesAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish
		JSONValue jsonObject = json.get("success");
		JSONValue arrayObject = jsonObject.isArray().get(0);
		
		//get all frequencies in list and return
		List<Frequency> freqs = new ArrayList<Frequency>();
		for(int i = 0; i < arrayObject.isArray().size(); i++) {
			JSONObject userObject = arrayObject.isArray().get(i).isObject();

			//extract the information for the object to return
			//TODO: Check for valid (non-null) values?	
			Integer id = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveGetFrequenciesKeys.ID));
			String frequency = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetFrequenciesKeys.FREQUENCY));

			Frequency f = new Frequency();
			f.setFrequency(frequency);
			f.setId(id);	

			//Add extracted info to the list
			freqs.add(f);
		}
		
		
		ReceiveGetFrequenciesAction action = new ReceiveGetFrequenciesAction(freqs);	
		return action;
	}

}
