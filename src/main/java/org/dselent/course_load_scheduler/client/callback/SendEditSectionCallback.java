package org.dselent.course_load_scheduler.client.callback;

import org.dselent.course_load_scheduler.client.action.ReceiveEditSectionAction;
import org.dselent.course_load_scheduler.client.event.ReceiveEditSectionEvent;
import org.dselent.course_load_scheduler.client.translator.impl.EditSectionActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.event.shared.SimpleEventBus;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class SendEditSectionCallback extends Callback<JSONValue>{
	public SendEditSectionCallback(SimpleEventBus eventBus) {
		super(eventBus);
	}

	@Override
	public void onSuccess(JSONValue result)
	{
		JSONObject json = JSONHelper.getObjectValue(result);
		EditSectionActionTranslatorImpl editSectionActionTranslator = new EditSectionActionTranslatorImpl();
		ReceiveEditSectionAction action = editSectionActionTranslator.translateToAction(json);

		ReceiveEditSectionEvent event = new ReceiveEditSectionEvent(action);
		eventBus.fireEvent(event);
	}

	//Do we need onFailure for Sections? We never made exceptions for them
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
