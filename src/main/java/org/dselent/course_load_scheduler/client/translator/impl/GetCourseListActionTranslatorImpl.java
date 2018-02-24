package org.dselent.course_load_scheduler.client.translator.impl;

import java.util.ArrayList;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.ReceiveGetCourseListAction;
import org.dselent.course_load_scheduler.client.action.SendGetCourseListAction;
import org.dselent.course_load_scheduler.client.model.CourseInfo;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveGetCourseListKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendGetCourseListKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class GetCourseListActionTranslatorImpl implements ActionTranslator<SendGetCourseListAction, ReceiveGetCourseListAction>{
	@Override
	public JSONObject translateToJson(SendGetCourseListAction action)
	{
		JSONObject jsonObject = new JSONObject();

		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendGetCourseListKeys.TERMS_ID), action.getTermId());
		
		return jsonObject;
	}

	@Override
	public ReceiveGetCourseListAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		JSONValue jsonObject = json.get("success");
		
		//loops through each element in the list and fills an ArrayList with the info for each course
		List<CourseInfo> courseList = new ArrayList<CourseInfo>();
		
		for(int i = 0; i < jsonObject.isArray().size(); i++) {
			JSONObject userObject = jsonObject.isArray().get(0).isObject();
			CourseInfo course = new CourseInfo();

			//extract the information for the object to return
			//TODO: Check for valid (non-null) values?		
			course.setCourseId(JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveGetCourseListKeys.COURSE_ID)));
			course.setCoursesNumber(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetCourseListKeys.COURSE_NUMBER)));
			course.setCoursesTitle(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetCourseListKeys.COURSE_TITLE)));
			course.setFrequency(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetCourseListKeys.FREQUENCY)));
			course.setFrequencyId(JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveGetCourseListKeys.FREQUENCY_ID)));
	
			//Add extracted info to the list
			courseList.add(course);
		}
		
		//add the list into the action and return
		ReceiveGetCourseListAction action = new ReceiveGetCourseListAction(courseList);
		
		return action;
	}
}
