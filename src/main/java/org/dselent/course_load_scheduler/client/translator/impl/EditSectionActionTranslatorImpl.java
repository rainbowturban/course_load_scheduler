package org.dselent.course_load_scheduler.client.translator.impl;

import java.sql.Time;

import org.dselent.course_load_scheduler.client.action.ReceiveEditSectionAction;
import org.dselent.course_load_scheduler.client.action.SendEditSectionAction;
import org.dselent.course_load_scheduler.client.model.SectionsInfo;
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

		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendEditSectionKeys.ID), action.getSectionInfo().getId());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendEditSectionKeys.TERMS_ID), action.getSectionInfo().getTermsID());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendEditSectionKeys.SECTION_TYPE_ID), action.getSectionInfo().getSectionTypeID());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendEditSectionKeys.DAYS_ID), action.getSectionInfo().getDaysID());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendEditSectionKeys.COURSES_ID), action.getSectionInfo().getCoursesID());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendEditSectionKeys.START_TIME_ID), action.getSectionInfo().getStartID());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendEditSectionKeys.END_TIME_ID), action.getSectionInfo().getEndID());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendEditSectionKeys.SECTIONS_NAME), action.getSectionInfo().getName());

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
		String termsName =  JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveEditSectionKeys.TERMS_NAME));
		String sectionType = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveEditSectionKeys.SECTION_TYPE));
		String days = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveEditSectionKeys.DAYS));
		String coursesNumber = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveEditSectionKeys.COURSES_NUMBER));
		String coursesTitle = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveEditSectionKeys.COURSES_TITLE));
		Time startTime = Time.valueOf(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveEditSectionKeys.START_TIME)));
		Time endTime = Time.valueOf(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveEditSectionKeys.END_TIME)));
		String sectionsName = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveEditSectionKeys.SECTIONS_NAME));

		
		SectionsInfo section = new SectionsInfo();
		section.setSectionsId(id);
		section.setTermsName(termsName);
		section.setSectionType(sectionType);
		section.setDays(days);
		section.setCoursesNumber(coursesNumber);
		section.setCoursesTitle(coursesTitle);
		section.setStartTime(startTime);
		section.setEndTime(endTime);
		section.setSectionsName(sectionsName);

		ReceiveEditSectionAction action = new ReceiveEditSectionAction(section);

		return action;		
	}

}
