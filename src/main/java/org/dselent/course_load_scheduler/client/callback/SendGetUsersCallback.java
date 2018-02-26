package org.dselent.course_load_scheduler.client.callback;

import org.dselent.course_load_scheduler.client.action.ReceiveGetUsersAction;
import org.dselent.course_load_scheduler.client.event.ReceiveGetUsersEvent;
import org.dselent.course_load_scheduler.client.translator.impl.GetUsersActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.event.shared.SimpleEventBus;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class SendGetUsersCallback extends Callback<JSONValue>{
	
	public SendGetUsersCallback(SimpleEventBus eventBus)
	{
		super(eventBus);
	}
	  
	@Override
	public void onSuccess(JSONValue result)
	{
		System.out.println("Sucessfully received reply from server!");
		JSONObject json = JSONHelper.getObjectValue(result);
		GetUsersActionTranslatorImpl loginActionTranslator = new GetUsersActionTranslatorImpl();
		ReceiveGetUsersAction action = loginActionTranslator.translateToAction(json);
		
		ReceiveGetUsersEvent event = new ReceiveGetUsersEvent(action);
		eventBus.fireEvent(event);
	}
	  
	@Override
	public void onFailure(Throwable caught)
	{
		// TODO
		// give better exception information
		// these stack traces are not helpful
		System.out.println("It failed in the reply...who knows?");
		
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
