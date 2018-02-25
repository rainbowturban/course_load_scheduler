package org.dselent.course_load_scheduler.client.callback;

import org.dselent.course_load_scheduler.client.action.ReceiveGetSectionsAction;
import org.dselent.course_load_scheduler.client.event.ReceiveGetSectionsEvent;
import org.dselent.course_load_scheduler.client.translator.impl.GetSectionsActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.event.shared.SimpleEventBus;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class SendGetSectionsCallback extends Callback<JSONValue>{
	
	public SendGetSectionsCallback(SimpleEventBus eventBus)
	{
		super(eventBus);
	}
	  
	@Override
	public void onSuccess(JSONValue result)
	{
		JSONObject json = JSONHelper.getObjectValue(result);
		GetSectionsActionTranslatorImpl getSectionsActionTranslator = new GetSectionsActionTranslatorImpl();
		ReceiveGetSectionsAction action = getSectionsActionTranslator.translateToAction(json);
		
		ReceiveGetSectionsEvent event = new ReceiveGetSectionsEvent(action);
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
