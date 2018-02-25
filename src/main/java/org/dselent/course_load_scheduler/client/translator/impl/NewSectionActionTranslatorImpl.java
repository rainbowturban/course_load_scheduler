package org.dselent.course_load_scheduler.client.translator.impl;

import java.sql.Time;

import org.dselent.course_load_scheduler.client.action.ReceiveNewSectionAction;
import org.dselent.course_load_scheduler.client.action.SendNewSectionAction;
import org.dselent.course_load_scheduler.client.model.CourseSections;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveNewSectionKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendNewSectionKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class NewSectionActionTranslatorImpl implements ActionTranslator<SendNewSectionAction, ReceiveNewSectionAction>{
	@Override
	public JSONObject translateToJson(SendNewSectionAction action)
	{
		JSONObject jsonObject = new JSONObject();

		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendNewSectionKeys.TERM), action.getSectionInfo().getTermsName());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendNewSectionKeys.SECTION_TYPE), action.getSectionInfo().getSectionType());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendNewSectionKeys.DAYS), action.getSectionInfo().getDays());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendNewSectionKeys.COURSES_NUMBER), action.getSectionInfo().getCoursesNumber());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendNewSectionKeys.COURSES_TITLE), action.getSectionInfo().getCoursesTitle());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendNewSectionKeys.START_TIME), action.getSectionInfo().getStartTime().toString());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendNewSectionKeys.END_TIME), action.getSectionInfo().getEndTime().toString());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendNewSectionKeys.NAME), action.getSectionInfo().getSectionsName());

		return jsonObject;
	}

	@Override
	public ReceiveNewSectionAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		JSONValue jsonObject = json.get("success");
		JSONObject userObject = jsonObject.isArray().get(0).isObject();

		//extract the information for the object to return
		//TODO: Check for valid (non-null) values?
		Integer id = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveNewSectionKeys.ID));
		String termsName =  JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveNewSectionKeys.TERMS_NAME));
		String sectionType = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveNewSectionKeys.SECTION_TYPE));
		String days = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveNewSectionKeys.DAYS));
		String coursesNumber = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveNewSectionKeys.COURSES_NUMBER));
		String coursesTitle = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveNewSectionKeys.COURSES_TITLE));
		Time startTime = Time.valueOf(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveNewSectionKeys.START_TIME)));
		Time endTime = Time.valueOf(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveNewSectionKeys.END_TIME)));
		String sectionsName = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveNewSectionKeys.SECTIONS_NAME));


		CourseSections section = new CourseSections();
		section.setSectionId(id);
		section.setTermsName(termsName);
		section.setSectionType(sectionType);
		section.setDays(days);
		section.setCoursesNumber(coursesNumber);
		section.setCoursesTitle(coursesTitle);
		section.setStartTime(startTime);
		section.setEndTime(endTime);
		section.setSectionsName(sectionsName);

		ReceiveNewSectionAction action = new ReceiveNewSectionAction(section);

		return action;		
	}
}
