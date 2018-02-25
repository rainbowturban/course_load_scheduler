package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendGetFrequenciesAction;
import org.dselent.course_load_scheduler.client.event_handler.SendGetFrequenciesEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SendGetFrequenciesEvent extends GwtEvent<SendGetFrequenciesEventHandler> {
public static Type<SendGetFrequenciesEventHandler> TYPE = new Type<SendGetFrequenciesEventHandler>();
	
	private SendGetFrequenciesAction action;
	
	public SendGetFrequenciesEvent(SendGetFrequenciesAction action)
	{
		this.action = action;
	}
	
	public SendGetFrequenciesAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<SendGetFrequenciesEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	@Override
	protected void dispatch(SendGetFrequenciesEventHandler handler)
	{
		handler.onSendGetFrequencies(this);
	}

}
