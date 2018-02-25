package org.dselent.course_load_scheduler.client.translator.impl;

import java.sql.Time;
import java.util.ArrayList;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.ReceiveGetSectionsAction;
import org.dselent.course_load_scheduler.client.action.SendGetSectionsAction;
import org.dselent.course_load_scheduler.client.model.SectionsInfo;
import org.dselent.course_load_scheduler.client.receive.jsonkeys.ReceiveGetSectionsKeys;
import org.dselent.course_load_scheduler.client.send.jsonkeys.SendGetSectionsKeys;
import org.dselent.course_load_scheduler.client.translator.ActionTranslator;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class GetSectionsActionTranslatorImpl implements ActionTranslator<SendGetSectionsAction, ReceiveGetSectionsAction>{
	@Override
	public JSONObject translateToJson(SendGetSectionsAction action)
	{
		JSONObject jsonObject = new JSONObject();

		JSONHelper.putIntValue(jsonObject, JSONHelper.convertKeyName(SendGetSectionsKeys.COURSES_ID), action.getCourseId());

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

		//loops through each element in the list and fills an ArrayList with the info for each course
		List<SectionsInfo> sectionList = new ArrayList<SectionsInfo>();

		for(int i = 0; i < jsonObject.isArray().size(); i++) {
			JSONObject userObject = jsonObject.isArray().get(i).isObject();
			SectionsInfo section = new SectionsInfo();

			//extract the information for the object to return
			//TODO: Check for valid (non-null) values?		
			section.setSectionsId(JSONHelper.getIntValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.ID)));
			section.setTermsName(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.TERMS_NAME)));
			section.setSectionType(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.SECTION_TYPE)));
			section.setDays(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.DAYS)));
			section.setCoursesNumber(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.COURSES_NUMBER)));
			section.setCoursesTitle(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.COURSES_TITLE)));
			section.setStartTime(Time.valueOf(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.START_TIME))));
			section.setEndTime(Time.valueOf(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.END_TIME))));
			section.setSectionsName(JSONHelper.getStringValue(userObject, JSONHelper.convertKeyName(ReceiveGetSectionsKeys.SECTIONS_NAME)));

			//Add extracted info to the list
			sectionList.add(section);
		}

		//add the list into the action and return
		ReceiveGetSectionsAction action = new ReceiveGetSectionsAction(sectionList);

		return action;
	}

}
