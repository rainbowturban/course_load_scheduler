package org.dselent.course_load_scheduler.client.callback;

import org.dselent.course_load_scheduler.client.action.ReceiveRemoveScheduleAction;
import org.dselent.course_load_scheduler.client.event.ReceiveRemoveScheduleEvent;
import org.dselent.course_load_scheduler.client.translator.impl.RemoveScheduleActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.event.shared.SimpleEventBus;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class SendRemoveScheduleCallback extends Callback<JSONValue>{
	public SendRemoveScheduleCallback(SimpleEventBus eventBus)
	{
		super(eventBus);
	}
	  
	@Override
	public void onSuccess(JSONValue result)
	{
		JSONObject json = JSONHelper.getObjectValue(result);
		RemoveScheduleActionTranslatorImpl loginActionTranslator = new RemoveScheduleActionTranslatorImpl();
		ReceiveRemoveScheduleAction action = loginActionTranslator.translateToAction(json);
		
		ReceiveRemoveScheduleEvent event = new ReceiveRemoveScheduleEvent(action);
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

}
