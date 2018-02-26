package org.dselent.course_load_scheduler.client.translator.impl;

import org.dselent.course_load_scheduler.client.action.ReceiveEditScheduleAction;
import org.dselent.course_load_scheduler.client.action.SendEditScheduleAction;
import org.dselent.course_load_scheduler.client.model.Schedule;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveEditScheduleKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendEditScheduleKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class EditScheduleActionTranslatorImpl implements ActionTranslator<SendEditScheduleAction, ReceiveEditScheduleAction> {
	@Override
	public JSONObject translateToJson(SendEditScheduleAction action)
	{
		JSONObject jsonObject = new JSONObject();

		
		// not sure if this is right?? - sarah
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendEditScheduleKeys.ID), action.getEditScheduleInfo().getID());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendEditScheduleKeys.FACULTY_ID), action.getEditScheduleInfo().getFacultyID());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendEditScheduleKeys.SECTIONS_ID), action.getEditScheduleInfo().getSectionsID());
		//JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendAddScheduleKeys.CREATED_AT), action.getAddScheduleInfo().getCreatedAt());
		//JSONHelper.putLongValue(jsonObject, JSONHelper.convertKeyName(SendAddScheduleKeys.UPDATED_AT), action.getAddScheduleInfo().getUpdatedAt());
		JSONHelper.putBooleanValue(jsonObject, JSONHelper.convertKeyName(SendEditScheduleKeys.DELETED), action.getEditScheduleInfo().getDeleted());
		
		return jsonObject;
	}

	//@Override
	public ReceiveEditScheduleAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		JSONValue jsonObject = json.get("success");
		JSONObject userObject = jsonObject.isArray().get(0).isObject();

		
		//extract the information for the object to return
		//TODO: Check for valid (non-null) values?
		Integer id = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveEditScheduleKeys.ID));
		Integer facultyid = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveEditScheduleKeys.FACULTY_ID));
		Boolean deleted = JSONHelper.getBooleanValue(userObject, JSONHelper.convertKeyName(ReceiveEditScheduleKeys.DELETED));
		

		//Put the information into the object
		Schedule schedule = new Schedule();
		schedule.setID(id);
		schedule.setFacultyID(facultyid);
		schedule.setDeleted(deleted);


		// possibly use builder pattern if it is a lot of data
		ReceiveEditScheduleAction action = new ReceiveEditScheduleAction(schedule);	

		return action;
	}
}
