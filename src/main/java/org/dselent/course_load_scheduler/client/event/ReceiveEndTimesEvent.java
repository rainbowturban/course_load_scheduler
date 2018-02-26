package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveEndTimesAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveEndTimesEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class ReceiveEndTimesEvent extends GwtEvent<ReceiveEndTimesEventHandler> {
	public static Type<ReceiveEndTimesEventHandler> TYPE = new Type<ReceiveEndTimesEventHandler>();
	private ReceiveEndTimesAction action;

	public ReceiveEndTimesEvent(ReceiveEndTimesAction action)
	{
		this.action = action;
	}

	public ReceiveEndTimesAction getAction()
	{
		return action;
	}

	@Override
	public Type<ReceiveEndTimesEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	@Override
	protected void dispatch(ReceiveEndTimesEventHandler handler)
	{
		handler.onReceiveEndTimes(this);
	}

}
