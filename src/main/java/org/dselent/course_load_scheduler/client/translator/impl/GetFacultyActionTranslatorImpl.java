package org.dselent.course_load_scheduler.client.translator.impl;

import java.util.ArrayList;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.ReceiveGetFacultyAction;
import org.dselent.course_load_scheduler.client.action.SendGetFacultyAction;
import org.dselent.course_load_scheduler.client.model.Faculty;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveGetFacultyKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class GetFacultyActionTranslatorImpl implements ActionTranslator<SendGetFacultyAction, ReceiveGetFacultyAction>{
	@Override
	public JSONObject translateToJson(SendGetFacultyAction action)
	{
		JSONObject jsonObject = new JSONObject();
		return jsonObject;
	}

	@Override
	public ReceiveGetFacultyAction translateToAction(JSONObject json)
	{
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		JSONValue jsonObject = json.get("success");
		JSONValue otherObject = jsonObject.isArray().get(0);

		//loops through each element in the list and fills an ArrayList with the info for each course
		List<Faculty> facultyList = new ArrayList<Faculty>();

		for(int i = 0; i < otherObject.isArray().size(); i++) {
			JSONObject facultyObject = otherObject.isArray().get(i).isObject();
			Faculty f = new Faculty();

			//extract the information for the object to return
			//TODO: Check for valid (non-null) values?
			f.setId(JSONHelper.getIntValue(facultyObject, JSONHelper.convertKeyName(ReceiveGetFacultyKeys.ID)));
			f.setFirstName(JSONHelper.getStringValue(facultyObject, JSONHelper.convertKeyName(ReceiveGetFacultyKeys.FIRST_NAME)));
			f.setLastName(JSONHelper.getStringValue(facultyObject, JSONHelper.convertKeyName(ReceiveGetFacultyKeys.LAST_NAME)));
			f.setEmail(JSONHelper.getStringValue(facultyObject, JSONHelper.convertKeyName(ReceiveGetFacultyKeys.EMAIL)));
			f.setFacultyTypeId(JSONHelper.getIntValue(facultyObject, JSONHelper.convertKeyName(ReceiveGetFacultyKeys.FACULTY_TYPE_ID)));

			//Add extracted info to the list
			facultyList.add(f);
		}

		//add the list into the action and return
		ReceiveGetFacultyAction action = new ReceiveGetFacultyAction(facultyList);

		return action;
	}

}
