package org.dselent.course_load_scheduler.client.translator.impl;

import org.dselent.course_load_scheduler.client.action.ReceiveNewCourseAction;
import org.dselent.course_load_scheduler.client.action.SendNewCourseAction;
import org.dselent.course_load_scheduler.client.model.Courses;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveNewCourseKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendNewCourseKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class NewCourseActionTranslatorImpl implements ActionTranslator<SendNewCourseAction, ReceiveNewCourseAction>{
	@Override
	public JSONObject translateToJson(SendNewCourseAction action)
	{
		JSONObject jsonObject = new JSONObject();
		
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendNewCourseKeys.NUMBER), action.getCourseInfo().getNumber());
		JSONHelper.putStringValue(jsonObject, JSONHelper.convertKeyName(SendNewCourseKeys.TITLE), action.getCourseInfo().getTitle());
		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendNewCourseKeys.FREQUENCY_ID), action.getCourseInfo().getFrequencyID());
		
		return jsonObject;
	}

	@Override
	public ReceiveNewCourseAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		JSONValue jsonObject = json.get("success");
		JSONObject userObject = jsonObject.isArray().get(0).isObject();

		
		//extract the information for the object to return
		//TODO: Check for valid (non-null) values?
		Integer id = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveNewCourseKeys.ID));
		String coursesNumber = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveNewCourseKeys.NUMBER));
		String coursesTitle = JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveNewCourseKeys.TITLE));
		Boolean deleted = JSONHelper.getBooleanValue(userObject, JSONHelper.convertKeyName(ReceiveNewCourseKeys.DELETED));
		Integer frequencyId = JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveNewCourseKeys.FREQUENCY_ID));

		//Put the information into the object
		Courses course = new Courses();
		course.setId(id);
		course.setNumber(coursesNumber);
		course.setTitle(coursesTitle);
		course.setFrequencyID(frequencyId);
		course.setDeleted(deleted);

		// possibly use builder pattern if it is a lot of data
		ReceiveNewCourseAction action = new ReceiveNewCourseAction(course);	

		return action;
	}

}
