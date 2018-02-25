package org.dselent.course_load_scheduler.client.callback;

import org.dselent.course_load_scheduler.client.action.ReceiveCreateNewRequestAction;
import org.dselent.course_load_scheduler.client.event.ReceiveCreateNewRequestEvent;
import org.dselent.course_load_scheduler.client.translator.impl.CreateNewRequestActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.event.shared.SimpleEventBus;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class SendCreateNewRequestCallback extends Callback<JSONValue>{
	public SendCreateNewRequestCallback(SimpleEventBus eventBus)
	{
		super(eventBus);
	}
	  
	@Override
	public void onSuccess(JSONValue result)
	{
		JSONObject json = JSONHelper.getObjectValue(result);
		CreateNewRequestActionTranslatorImpl loginActionTranslator = new CreateNewRequestActionTranslatorImpl();
		ReceiveCreateNewRequestAction action = loginActionTranslator.translateToAction(json);
		
		ReceiveCreateNewRequestEvent event = new ReceiveCreateNewRequestEvent(action);
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
