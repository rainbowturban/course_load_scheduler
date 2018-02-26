package org.dselent.course_load_scheduler.client.callback;

import org.dselent.course_load_scheduler.client.action.InvalidAccountCreationAction;
import org.dselent.course_load_scheduler.client.action.ReceiveGetOneFacultySectionInfoAction;
import org.dselent.course_load_scheduler.client.event.InvalidAccountCreationEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveGetOneFacultySectionInfoEvent;
import org.dselent.course_load_scheduler.client.translator.impl.GetOneFacultySectionInfoActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;

import com.google.gwt.event.shared.SimpleEventBus;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;

public class SendGetOneFacultySectionInfoCallback extends Callback<JSONValue>
{
	public SendGetOneFacultySectionInfoCallback(SimpleEventBus eventBus)
	{
		super(eventBus);
	}

	@Override
	public void onSuccess(JSONValue result)
	{
		JSONObject json = JSONHelper.getObjectValue(result);
		GetOneFacultySectionInfoActionTranslatorImpl createAccountActionTranslator = new GetOneFacultySectionInfoActionTranslatorImpl();
		ReceiveGetOneFacultySectionInfoAction action = createAccountActionTranslator.translateToAction(json);

		ReceiveGetOneFacultySectionInfoEvent event = new ReceiveGetOneFacultySectionInfoEvent(action);
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
