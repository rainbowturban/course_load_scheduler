package org.dselent.course_load_scheduler.client.callback;

import org.dselent.course_load_scheduler.client.action.ReceiveRemoveSectionAction;
import org.dselent.course_load_scheduler.client.event.ReceiveRemoveSectionEvent;
import org.dselent.course_load_scheduler.client.translator.impl.RemoveSectionActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.event.shared.SimpleEventBus;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class SendRemoveSectionCallback extends Callback<JSONValue>{
	
	public SendRemoveSectionCallback(SimpleEventBus eventBus)
	{
		super(eventBus);
	}
	  
	@Override
	public void onSuccess(JSONValue result)
	{
		JSONObject json = JSONHelper.getObjectValue(result);
		RemoveSectionActionTranslatorImpl removeSectionActionTranslator = new RemoveSectionActionTranslatorImpl();
		ReceiveRemoveSectionAction action = removeSectionActionTranslator.translateToAction(json);
		
		ReceiveRemoveSectionEvent event = new ReceiveRemoveSectionEvent(action);
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
