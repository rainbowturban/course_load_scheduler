package org.dselent.course_load_scheduler.client.translator.impl;

import java.sql.Time;
import java.util.ArrayList;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.ReceiveGetOneFacultySectionInfoAction;
import org.dselent.course_load_scheduler.client.action.SendGetOneFacultySectionInfoAction;
import org.dselent.course_load_scheduler.client.model.SectionsInfo;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveGetOneFacultySectionInfoKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendGetOneFacultySectionInfoKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONObject;
public class GetOneFacultySectionInfoActionTranslatorImpl implements ActionTranslator<SendGetOneFacultySectionInfoAction, ReceiveGetOneFacultySectionInfoAction>{
	@Override
	public JSONObject translateToJson(SendGetOneFacultySectionInfoAction action)
	{
		JSONObject jsonObject = new JSONObject();
		
		//JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendGetOneFacultySectionInfoKeys.FACULTY_ID), action.getId());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendGetOneFacultySectionInfoKeys.FACULTY_ID), action.getFacultyId());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendGetOneFacultySectionInfoKeys.TERMS_ID), action.getTermsId());
		return jsonObject;
	}

	@Override
	public ReceiveGetOneFacultySectionInfoAction translateToAction(JSONObject json)
	{
		JSONArray jsonObject = json.get("success").isArray().get(0).isArray();

		//loops through each element in the list and fills an ArrayList with the info for each course
		List<SectionsInfo> sectionsInfoList = new ArrayList<SectionsInfo>();

		for(int i = 0; i < jsonObject.size(); i++) {
			JSONObject sectionsInfoObject = jsonObject.get(i).isObject();
			SectionsInfo si = new SectionsInfo();

			//extract the information for the object to return
			//TODO: Check for valid (non-null) values?
			si.setCoursesTitle(JSONHelper.getStringValue(sectionsInfoObject, JSONHelper.convertKeyName(ReceiveGetOneFacultySectionInfoKeys.COURSES_TITLE)));
			si.setFacultyId(JSONHelper.getIntValue(sectionsInfoObject, JSONHelper.convertKeyName(ReceiveGetOneFacultySectionInfoKeys.FACULTY_ID)));
			si.setTermsName(JSONHelper.getStringValue(sectionsInfoObject, JSONHelper.convertKeyName(ReceiveGetOneFacultySectionInfoKeys.TERMS_NAME)));

			si.setCoursesNumber(JSONHelper.getStringValue(sectionsInfoObject, JSONHelper.convertKeyName(ReceiveGetOneFacultySectionInfoKeys.COURSES_NUMBER)));
			si.setSectionsName(JSONHelper.getStringValue(sectionsInfoObject, JSONHelper.convertKeyName(ReceiveGetOneFacultySectionInfoKeys.SECTIONS_NAME)));
			si.setCoursesTitle(JSONHelper.getStringValue(sectionsInfoObject, JSONHelper.convertKeyName(ReceiveGetOneFacultySectionInfoKeys.COURSES_TITLE)));
			si.setStartTime(Time.valueOf(JSONHelper.getStringValue(sectionsInfoObject, JSONHelper.convertKeyName(ReceiveGetOneFacultySectionInfoKeys.START_TIME))));
			si.setEndTime(Time.valueOf(JSONHelper.getStringValue(sectionsInfoObject, JSONHelper.convertKeyName(ReceiveGetOneFacultySectionInfoKeys.END_TIME))));
			si.setDays(JSONHelper.getStringValue(sectionsInfoObject, JSONHelper.convertKeyName(ReceiveGetOneFacultySectionInfoKeys.DAYS)));
			si.setSectionType(JSONHelper.getStringValue(sectionsInfoObject, JSONHelper.convertKeyName(ReceiveGetOneFacultySectionInfoKeys.SECTION_TYPE)));

			//Add extracted info to the list
			sectionsInfoList.add(si);
		}

		//add the list into the action and return
		ReceiveGetOneFacultySectionInfoAction action = new ReceiveGetOneFacultySectionInfoAction(sectionsInfoList);

		return action;
	}

}
