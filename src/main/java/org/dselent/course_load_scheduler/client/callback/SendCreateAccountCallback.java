package org.dselent.course_load_scheduler.client.callback;

import org.dselent.course_load_scheduler.client.action.InvalidAccountCreationAction;
import org.dselent.course_load_scheduler.client.action.ReceiveCreateAccountAction;
import org.dselent.course_load_scheduler.client.event.InvalidAccountCreationEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveCreateAccountEvent;
import org.dselent.course_load_scheduler.client.translator.impl.CreateAccountActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.event.shared.SimpleEventBus;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class SendCreateAccountCallback extends Callback<JSONValue>
{
	public SendCreateAccountCallback(SimpleEventBus eventBus)
	{
		super(eventBus);
	}
	  
	@Override
	public void onSuccess(JSONValue result)
	{
		JSONObject json = JSONHelper.getObjectValue(result);
		CreateAccountActionTranslatorImpl createAccountActionTranslator = new CreateAccountActionTranslatorImpl();
		ReceiveCreateAccountAction action = createAccountActionTranslator.translateToAction(json);
		
		ReceiveCreateAccountEvent event = new ReceiveCreateAccountEvent(action);
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
		
		InvalidAccountCreationAction ila = new InvalidAccountCreationAction(sb.toString());
		InvalidAccountCreationEvent ile = new InvalidAccountCreationEvent(ila);
		eventBus.fireEvent(ile);
	}

  }
