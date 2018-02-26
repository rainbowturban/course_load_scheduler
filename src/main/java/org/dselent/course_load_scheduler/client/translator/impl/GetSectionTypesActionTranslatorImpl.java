package org.dselent.course_load_scheduler.client.translator.impl;

import java.util.ArrayList;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.ReceiveGetSectionTypesAction;
import org.dselent.course_load_scheduler.client.action.SendGetSectionTypesAction;
import org.dselent.course_load_scheduler.client.model.SectionType;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveSectionTypesKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class GetSectionTypesActionTranslatorImpl implements ActionTranslator<SendGetSectionTypesAction, ReceiveGetSectionTypesAction>{
	@Override
	public JSONObject translateToJson(SendGetSectionTypesAction action)
	{
		JSONObject jsonObject = new JSONObject();

		//nothing to send
		
		return jsonObject;
	}

	@Override
	public ReceiveGetSectionTypesAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		JSONValue jsonObject = json.get("success");
		JSONValue listObject = jsonObject.isArray().get(0);
		
		//loops through each element in the list and fills an ArrayList with the info for each course
		List<SectionType> typeList = new ArrayList<SectionType>();
		
		for(int i = 0; i < listObject.isArray().size(); i++) {
			JSONObject userObject = listObject.isArray().get(i).isObject();
			SectionType type = new SectionType();

			//extract the information for the object to return
			//TODO: Check for valid (non-null) values?		
			type.setId(JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveSectionTypesKeys.ID)));
			type.setType(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveSectionTypesKeys.TYPE)));
	
			//Add extracted info to the list
			typeList.add(type);
		}
		
		//add the list into the action and return
		ReceiveGetSectionTypesAction action = new ReceiveGetSectionTypesAction(typeList);
		
		return action;
	}

}
