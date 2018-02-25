package org.dselent.course_load_scheduler.client.callback;

import org.dselent.course_load_scheduler.client.action.InvalidAccountCreationAction;
import org.dselent.course_load_scheduler.client.action.ReceiveGetFacultyAction;
import org.dselent.course_load_scheduler.client.event.InvalidAccountCreationEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveGetFacultyEvent;
import org.dselent.course_load_scheduler.client.translator.impl.GetFacultyActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.event.shared.SimpleEventBus;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class SendGetFacultyCallback extends Callback<JSONValue>
{
	public SendGetFacultyCallback(SimpleEventBus eventBus)
	{
		super(eventBus);
	}

	@Override
	public void onSuccess(JSONValue result)
	{
		JSONObject json = JSONHelper.getObjectValue(result);
		GetFacultyActionTranslatorImpl createAccountActionTranslator = new GetFacultyActionTranslatorImpl();
		ReceiveGetFacultyAction action = createAccountActionTranslator.translateToAction(json);

		ReceiveGetFacultyEvent event = new ReceiveGetFacultyEvent(action);
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
