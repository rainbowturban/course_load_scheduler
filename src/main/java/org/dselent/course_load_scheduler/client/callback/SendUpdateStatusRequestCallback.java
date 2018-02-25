package org.dselent.course_load_scheduler.client.callback;

import org.dselent.course_load_scheduler.client.action.ReceiveUpdateStatusRequestAction;
import org.dselent.course_load_scheduler.client.event.ReceiveUpdateStatusRequestEvent;
import org.dselent.course_load_scheduler.client.translator.impl.UpdateStatusRequestActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.event.shared.SimpleEventBus;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class SendUpdateStatusRequestCallback extends Callback<JSONValue>{
	public SendUpdateStatusRequestCallback(SimpleEventBus eventBus)
	{
		super(eventBus);
	}
	  
	@Override
	public void onSuccess(JSONValue result)
	{
		JSONObject json = JSONHelper.getObjectValue(result);
		UpdateStatusRequestActionTranslatorImpl loginActionTranslator = new UpdateStatusRequestActionTranslatorImpl();
		ReceiveUpdateStatusRequestAction action = loginActionTranslator.translateToAction(json);
		
		ReceiveUpdateStatusRequestEvent event = new ReceiveUpdateStatusRequestEvent(action);
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

