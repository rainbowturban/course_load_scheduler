package org.dselent.course_load_scheduler.client.translator.impl;

import org.dselent.course_load_scheduler.client.action.ReceiveEditCourseAction;
import org.dselent.course_load_scheduler.client.action.SubmitEditCourseAction;
import org.dselent.course_load_scheduler.client.model.Courses;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveEditCourseKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SubmitEditCourseKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class EditCourseActionTranslatorImpl implements ActionTranslator<SubmitEditCourseAction, ReceiveEditCourseAction>{
	@Override
	public JSONObject translateToJson(SubmitEditCourseAction action)
	{
		JSONObject jsonObject = new JSONObject();

		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SubmitEditCourseKeys.COURSE_NUMBER), action.getCourseInfo().getNumber());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SubmitEditCourseKeys.COURSE_NAME), action.getCourseInfo().getTitle());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SubmitEditCourseKeys.COURSE_FREQUENCY_ID), action.getCourseInfo().getFrequencyID());
		
		return jsonObject;
	}

	@Override
	public ReceiveEditCourseAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		JSONValue jsonObject = json.get("success");
		JSONObject userObject = jsonObject.isArray().get(0).isObject();

		
		//extract the information for the object to return
		//TODO: Check for valid (non-null) values?
		Integer id = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveEditCourseKeys.COURSE_ID));
		String coursesNumber = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveEditCourseKeys.COURSE_NUMBER));
		String coursesTitle = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveEditCourseKeys.COURSE_NAME));
		Integer frequencyId = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveEditCourseKeys.COURSE_FREQUENCY_ID));

		//Put the information into the object
		Courses course = new Courses();
		course.setId(id);
		course.setNumber(coursesNumber);
		course.setTitle(coursesTitle);
		course.setFrequencyID(frequencyId);

		// possibly use builder pattern if it is a lot of data
		ReceiveEditCourseAction action = new ReceiveEditCourseAction(course);	

		return action;
	}

}
