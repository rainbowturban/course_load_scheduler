package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveStartTimesAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveStartTimesEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class ReceiveStartTimesEvent extends GwtEvent<ReceiveStartTimesEventHandler>
{
	public static Type<ReceiveStartTimesEventHandler> TYPE = new Type<ReceiveStartTimesEventHandler>();
	private ReceiveStartTimesAction action;
	
	public ReceiveStartTimesEvent(ReceiveStartTimesAction action)
	{
		this.action = action;
	}
	
	public ReceiveStartTimesAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveStartTimesEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	@Override
	protected void dispatch(ReceiveStartTimesEventHandler handler)
	{
		handler.onReceiveStartTimes(this);
	}
}
