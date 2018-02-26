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
		Window.alert("Sucessfully received reply from server!");
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
		Window.alert("It failed in the reply...who knows?");
		
		StringBuilder sb = new StringBuilder();
		
		StackTraceElement[] stackTraceElements = caught.getStackTrace();
		for(StackTraceElement stackTraceElement : stackTraceElements)
		{
			sb.append(stackTraceElement.toString());
			sb.append("\n");
		}
		
	//		InvalidLoginAction ila = new InvalidLoginAction(sb.toString());
	//		InvalidLoginEvent ile = new InvalidLoginEvent(ila);
	//		eventBus.fireEvent(ile);
		
		CourseInfo course3 = new CourseInfo();
		course3.setCoursesNumber("CS####");
		course3.setCoursesTitle("Something");
		course3.setFrequency("Test value3");
		course3.setFrequencyId(4);
		course3.setCoursesId(3);

		ArrayList<CourseInfo> courses = new ArrayList<CourseInfo>();

		courses.add(course3);
		ReceiveGetCourseListAction action = new ReceiveGetCourseListAction(courses);
		
		ReceiveGetCourseListEvent event = new ReceiveGetCourseListEvent(action);
		eventBus.fireEvent(event);
	}

}
