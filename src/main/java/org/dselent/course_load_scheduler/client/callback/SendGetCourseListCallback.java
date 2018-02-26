package org.dselent.course_load_scheduler.client.callback;

import java.util.ArrayList;

import org.dselent.course_load_scheduler.client.action.ReceiveGetCourseListAction;
import org.dselent.course_load_scheduler.client.event.ReceiveGetCourseListEvent;
import org.dselent.course_load_scheduler.client.model.CourseInfo;
import org.dselent.course_load_scheduler.client.translator.impl.GetCourseListActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.event.shared.SimpleEventBus;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.Window;

public class SendGetCourseListCallback extends Callback<JSONValue>{
	
	public SendGetCourseListCallback(SimpleEventBus eventBus)
	{
		super(eventBus);
	}
	  
	@Override
	public void onSuccess(JSONValue result)
	{
		JSONObject json = JSONHelper.getObjectValue(result);
		GetCourseListActionTranslatorImpl loginActionTranslator = new GetCourseListActionTranslatorImpl();
		ReceiveGetCourseListAction action = loginActionTranslator.translateToAction(json);
		
		ReceiveGetCourseListEvent event = new ReceiveGetCourseListEvent(action);
		eventBus.fireEvent(event);
	}
	  
	@Override
	public void onFailure(Throwable caught)
	{
		// TODO
		// give better exception information
		// these stack traces are not helpful
		Window.alert("An error occured while fetching the courses.");
		
		StringBuilder sb = new StringBuilder();
		
		StackTraceElement[] stackTraceElements = caught.getStackTrace();
		for(StackTraceElement stackTraceElement : stackTraceElements)
		{
			sb.append(stackTraceElement.toString());
			sb.append("\n");
		}
		
	}

}
