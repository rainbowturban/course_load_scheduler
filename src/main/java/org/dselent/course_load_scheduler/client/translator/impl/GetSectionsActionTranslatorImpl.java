package org.dselent.course_load_scheduler.client.translator.impl;

import java.sql.Time;
import java.util.ArrayList;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.ReceiveGetSectionsAction;
import org.dselent.course_load_scheduler.client.action.SendGetSectionsAction;
import org.dselent.course_load_scheduler.client.model.CourseSections;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveGetSectionsKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendGetSectionsKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.Window;

public class GetSectionsActionTranslatorImpl implements ActionTranslator<SendGetSectionsAction, ReceiveGetSectionsAction>{
	@Override
	public JSONObject translateToJson(SendGetSectionsAction action)
	{
		JSONObject jsonObject = new JSONObject();

		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendGetSectionsKeys.COURSE_ID), action.getCourseId());

		return jsonObject;
	}

	@Override
	public ReceiveGetSectionsAction translateToAction(JSONObject json)
	{		
		// null values will not have their keys sent back from the sever
		// this will throw an exception here
		// you may choose to handle the exception as you wish

		// sent timestamps as epoch seconds (long)

		
		JSONValue jsonObject = json.get("success");
		JSONValue listObject = jsonObject.isArray().get(0);
		
		//loops through each element in the list and fills an ArrayList with the info for each course
		List<CourseSections> sectionList = new ArrayList<CourseSections>();
		

		for(int i = 0; i < listObject.isArray().size(); i++) {
			JSONObject userObject = listObject.isArray().get(i).isObject();
			CourseSections section = new CourseSections();

			//extract the information for the object to return
			//TODO: Check for valid (non-null) values?		
			section.setSectionId(JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.SECTION_ID)));
			section.setTermsName(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.TERMS_NAME)));
			section.setSectionType(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.SECTION_TYPE)));
			section.setDays(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.DAYS)));
			section.setCoursesNumber(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.COURSES_NUMBER)));
			section.setCoursesTitle(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.COURSES_TITLE)));
			section.setStartTime(Time.valueOf(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.START_TIME))));
			section.setEndTime(Time.valueOf(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.END_TIME))));
			section.setSectionsName(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.SECTIONS_NAME)));
			
			section.setSectionTypeId(JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.SECTION_TYPE_ID)));
			section.setCoursesId(JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.COURSES_ID)));
			section.setEndTimeId(JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.END_TIME_ID)));
			section.setStartTimeId(JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.START_TIME_ID)));
			section.setDaysId(JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.DAYS_ID)));
			section.setTermsId(JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.TERMS_ID)));
			
			//Add extracted info to the list
			sectionList.add(section);
		}

		//add the list into the action and return
		ReceiveGetSectionsAction action = new ReceiveGetSectionsAction(sectionList);

		return action;
	}

}
