package org.dselent.course_load_scheduler.client.callback;

import org.dselent.course_load_scheduler.client.action.ReceiveGetFrequenciesAction;
import org.dselent.course_load_scheduler.client.event.ReceiveGetFrequenciesEvent;
import org.dselent.course_load_scheduler.client.translator.impl.GetFrequenciesActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.event.shared.SimpleEventBus;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class SendGetFrequenciesCallback extends Callback<JSONValue>
{
	public SendGetFrequenciesCallback(SimpleEventBus eventBus)
	{
		super(eventBus);
	}
	  
	@Override
	public void onSuccess(JSONValue result)
	{
		JSONObject json = JSONHelper.getObjectValue(result);
		GetFrequenciesActionTranslatorImpl actionTranslator = new GetFrequenciesActionTranslatorImpl();
		ReceiveGetFrequenciesAction action = actionTranslator.translateToAction(json);
		
		ReceiveGetFrequenciesEvent event = new ReceiveGetFrequenciesEvent(action);
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
	}
}
