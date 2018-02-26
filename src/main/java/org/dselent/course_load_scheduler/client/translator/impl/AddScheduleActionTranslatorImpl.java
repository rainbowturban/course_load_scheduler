package org.dselent.course_load_scheduler.client.translator.impl;

import org.dselent.course_load_scheduler.client.action.ReceiveAddScheduleAction;
import org.dselent.course_load_scheduler.client.action.SendAddScheduleAction;
import org.dselent.course_load_scheduler.client.model.Schedule;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveAddScheduleKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendAddScheduleKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class AddScheduleActionTranslatorImpl implements ActionTranslator<SendAddScheduleAction, ReceiveAddScheduleAction> {
	@Override
	public JSONObject translateToJson(SendAddScheduleAction action)
	{
		JSONObject jsonObject = new JSONObject();

		
		// not sure if this is right?? - sarah
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendAddScheduleKeys.ID), action.getAddScheduleInfo().getID());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendAddScheduleKeys.FACULTY_ID), action.getAddScheduleInfo().getFacultyID());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendAddScheduleKeys.SECTIONS_ID), action.getAddScheduleInfo().getSectionsID());
		//JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendAddScheduleKeys.CREATED_AT), action.getAddScheduleInfo().getCreatedAt());
		//JSONHelper.putLongValue(jsonObject, JSONHelper.convertKeyName(SendAddScheduleKeys.UPDATED_AT), action.getAddScheduleInfo().getUpdatedAt());
		JSONHelper.putBooleanValue(jsonObject, JSONHelper.convertKeyName(SendAddScheduleKeys.DELETED), action.getAddScheduleInfo().getDeleted());
		
		return jsonObject;
	}

	//@Override
	public ReceiveAddScheduleAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		JSONValue jsonObject = json.get("success");
		JSONObject userObject = jsonObject.isArray().get(0).isObject();

		
		//extract the information for the object to return
		//TODO: Check for valid (non-null) values?
		Integer id = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveAddScheduleKeys.ID));
		Integer facultyid = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveAddScheduleKeys.FACULTY_ID));
		Integer sectionsid = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveAddScheduleKeys.SECTIONS_ID));
		Boolean deleted = JSONHelper.getBooleanValue(userObject, JSONHelper.convertKeyName(ReceiveAddScheduleKeys.DELETED));
		

		//Put the information into the object
		Schedule schedule = new Schedule();
		schedule.setID(id);
		schedule.setFacultyID(facultyid);
		schedule.setDeleted(deleted);


		// possibly use builder pattern if it is a lot of data
		ReceiveAddScheduleAction action = new ReceiveAddScheduleAction(schedule);	

		return action;
	}
}
