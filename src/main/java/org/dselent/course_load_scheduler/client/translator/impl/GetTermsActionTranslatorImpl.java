package org.dselent.course_load_scheduler.client.translator.impl;

import java.util.ArrayList;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.ReceiveGetTermsAction;
import org.dselent.course_load_scheduler.client.action.SendGetTermsAction;
import org.dselent.course_load_scheduler.client.model.Terms;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveGetTermsKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONObject;

public class GetTermsActionTranslatorImpl implements ActionTranslator<SendGetTermsAction, ReceiveGetTermsAction>{
	@Override
	public JSONObject translateToJson(SendGetTermsAction action)
	{
		JSONObject jsonObject = new JSONObject();

		return jsonObject;
	}

	@Override
	public ReceiveGetTermsAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)
		JSONArray jsonObject = json.get("success").isArray().get(0).isArray();

		//loops through each element in the list and fills an ArrayList with the info for each course
		List<Terms> termsList = new ArrayList<Terms>();

		for(int i = 0; i < jsonObject.isArray().size(); i++) {
			JSONObject userObject = jsonObject.get(i).isObject();
			Terms terms = new Terms();

			//extract the information for the object to return
			//TODO: Check for valid (non-null) values?		
			terms.setId(JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveGetTermsKeys.ID)));
			terms.setName(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetTermsKeys.NAME)));
			
			//Add extracted info to the list
			termsList.add(terms);
		}

		//add the list into the action and return
		ReceiveGetTermsAction action = new ReceiveGetTermsAction(termsList);

		return action;
	}
}
