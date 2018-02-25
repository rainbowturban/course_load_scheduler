package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveEndTimesAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveEndTimesEventHandler;

public class ReceiveEndTimesEvent extends BaseEvent<ReceiveEndTimesAction, ReceiveEndTimesEventHandler> {
	public static Type<ReceiveEndTimesEventHandler> TYPE = new Type<ReceiveEndTimesEventHandler>();
	private ReceiveEndTimesAction action;

	public ReceiveEndTimesEvent(ReceiveEndTimesAction action)
	{
		super(action);
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
