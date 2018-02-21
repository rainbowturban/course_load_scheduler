package org.dselent.course_load_scheduler.client.callback;

import org.dselent.course_load_scheduler.client.action.ReceiveNewCourseAction;
import org.dselent.course_load_scheduler.client.action.ReceiveRemoveCourseAction;
import org.dselent.course_load_scheduler.client.event.ReceiveNewCourseEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveRemoveCourseEvent;
import org.dselent.course_load_scheduler.client.translator.impl.RemoveCourseActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.event.shared.SimpleEventBus;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class SubmitRemoveCourseCallback extends Callback<JSONValue>{
	
	public SubmitRemoveCourseCallback(SimpleEventBus eventBus)
	{
		super(eventBus);
	}
	  
	@Override
	public void onSuccess(JSONValue result)
	{
		JSONObject json = JSONHelper.getObjectValue(result);
		RemoveCourseActionTranslatorImpl loginActionTranslator = new RemoveCourseActionTranslatorImpl();
		ReceiveRemoveCourseAction action = loginActionTranslator.translateToAction(json);
		
		ReceiveRemoveCourseEvent event = new ReceiveRemoveCourseEvent(action);
		eventBus.fireEvent(event);
	}
	  
	@Override
	public void onFailure(Throwable caught)
	{
		// TODO
		// give better exception information
		// these stack traces are not helpful
		
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
	}
{

}
