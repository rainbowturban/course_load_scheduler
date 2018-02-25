package org.dselent.course_load_scheduler.client.translator.impl;

import org.dselent.course_load_scheduler.client.action.ReceiveEditSectionAction;
import org.dselent.course_load_scheduler.client.action.SendEditSectionAction;
import org.dselent.course_load_scheduler.client.model.Sections;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveEditSectionKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendEditSectionKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class EditSectionActionTranslatorImpl implements ActionTranslator<SendEditSectionAction, ReceiveEditSectionAction>{
	@Override
	public JSONObject translateToJson(SendEditSectionAction action) {
		JSONObject jsonObject = new JSONObject();

		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendEditSectionKeys.ID), action.getSectionInfo().getSectionId());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendEditSectionKeys.TERMS_ID), action.getSectionInfo().getTermsId());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendEditSectionKeys.SECTION_TYPE_ID), action.getSectionInfo().getSectionTypeId());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendEditSectionKeys.DAYS_ID), action.getSectionInfo().getDaysId());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendEditSectionKeys.COURSES_ID), action.getSectionInfo().getCoursesId());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendEditSectionKeys.START_TIME_ID), action.getSectionInfo().getStartTimeId());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendEditSectionKeys.END_TIME_ID), action.getSectionInfo().getEndTimeId());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendEditSectionKeys.SECTIONS_NAME), action.getSectionInfo().getSectionsName());

		return jsonObject;
	}

	@Override
	public ReceiveEditSectionAction translateToAction(JSONObject json) {
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		JSONValue jsonObject = json.get("success");
		JSONObject userObject = jsonObject.isArray().get(0).isObject();

		//extract the information for the object to return
		//TODO: Check for valid (non-null) values?
		Integer id = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveEditSectionKeys.ID));
		Integer termsID =  JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveEditSectionKeys.TERMS_ID));
		Integer sectionTypeID = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveEditSectionKeys.SECTION_TYPE_ID));
		Integer daysID = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveEditSectionKeys.DAYS_ID));
		Integer coursesID = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveEditSectionKeys.COURSES_ID));
		Integer startID = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveEditSectionKeys.START_TIME_ID));
		Integer endID = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveEditSectionKeys.END_TIME_ID));
		String sectionsName = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveEditSectionKeys.SECTIONS_NAME));

		Sections section = new Sections();
		section.setId(id);
		section.setTermsID(termsID);
		section.setSectionTypeID(sectionTypeID);
		section.setDaysID(daysID);
		section.setCoursesID(coursesID);
		section.setStartID(startID);
		section.setEndID(endID);
		section.setName(sectionsName);


		ReceiveEditSectionAction action = new ReceiveEditSectionAction(section);

		return action;		
	}

}
