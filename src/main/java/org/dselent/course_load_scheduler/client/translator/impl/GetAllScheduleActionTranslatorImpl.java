package org.dselent.course_load_scheduler.client.translator.impl;

import org.dselent.course_load_scheduler.client.action.ReceiveGetAllScheduleAction;
import org.dselent.course_load_scheduler.client.action.SendGetAllScheduleAction;
import org.dselent.course_load_scheduler.client.model.Schedule;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveGetAllScheduleKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendGetAllScheduleKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class GetAllScheduleActionTranslatorImpl implements ActionTranslator<SendGetAllScheduleAction, ReceiveGetAllScheduleAction> {
	@Override
	public JSONObject translateToJson(SendGetAllScheduleAction action)
	{
		JSONObject jsonObject = new JSONObject();

		
		// not sure if this is right?? - sarah
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendGetAllScheduleKeys.ID), action.getGetAllScheduleInfo().getID());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendGetAllScheduleKeys.FACULTY_ID), action.getGetAllScheduleInfo().getFacultyID());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendGetAllScheduleKeys.SECTIONS_ID), action.getGetAllScheduleInfo().getSectionsID());
		//JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendAddScheduleKeys.CREATED_AT), action.getAddScheduleInfo().getCreatedAt());
		//JSONHelper.putLongValue(jsonObject, JSONHelper.convertKeyName(SendAddScheduleKeys.UPDATED_AT), action.getAddScheduleInfo().getUpdatedAt());
		JSONHelper.putBooleanValue(jsonObject, JSONHelper.convertKeyName(SendGetAllScheduleKeys.DELETED), action.getGetAllScheduleInfo().getDeleted());
		
		return jsonObject;
	}

	//@Override
	public ReceiveGetAllScheduleAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		JSONValue jsonObject = json.get("success");
		JSONObject userObject = jsonObject.isArray().get(0).isObject();

		
		//extract the information for the object to return
		//TODO: Check for valid (non-null) values?
		Integer id = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveGetAllScheduleKeys.ID));
		Integer facultyid = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveGetAllScheduleKeys.FACULTY_ID));
		Integer sectionsid = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveGetAllScheduleKeys.SECTIONS_ID));
		Boolean deleted = JSONHelper.getBooleanValue(userObject, JSONHelper.convertKeyName(ReceiveGetAllScheduleKeys.DELETED));
		

		//Put the information into the object
		Schedule schedule = new Schedule();
		schedule.setID(id);
		schedule.setFacultyID(facultyid);
		schedule.setDeleted(deleted);


		// possibly use builder pattern if it is a lot of data
		ReceiveGetAllScheduleAction action = new ReceiveGetAllScheduleAction(schedule);	

		return action;
	}
}
