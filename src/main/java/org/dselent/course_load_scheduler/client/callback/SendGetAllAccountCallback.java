package org.dselent.course_load_scheduler.client.callback;

import org.dselent.course_load_scheduler.client.action.ReceiveGetAllAccountAction;
import org.dselent.course_load_scheduler.client.event.ReceiveGetAllAccountEvent;
import org.dselent.course_load_scheduler.client.translator.impl.GetAllAccountActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.event.shared.SimpleEventBus;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class SendGetAllAccountCallback extends Callback<JSONValue>{
	public SendGetAllAccountCallback(SimpleEventBus eventBus)
	{
		super(eventBus);
	}
	  
	@Override
	public void onSuccess(JSONValue result)
	{
		JSONObject json = JSONHelper.getObjectValue(result);
		GetAllAccountActionTranslatorImpl loginActionTranslator = new GetAllAccountActionTranslatorImpl();
		ReceiveGetAllAccountAction action = loginActionTranslator.translateToAction(json);
		
		ReceiveGetAllAccountEvent event = new ReceiveGetAllAccountEvent(action);
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
