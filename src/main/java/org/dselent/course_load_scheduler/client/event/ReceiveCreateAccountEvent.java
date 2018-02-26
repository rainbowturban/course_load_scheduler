package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveCreateAccountAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveCreateAccountEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class ReceiveCreateAccountEvent extends GwtEvent<ReceiveCreateAccountEventHandler>
{
	public static Type<ReceiveCreateAccountEventHandler> TYPE = new Type<ReceiveCreateAccountEventHandler>();
	private ReceiveCreateAccountAction action;
	
	public ReceiveCreateAccountEvent(ReceiveCreateAccountAction action)
	{
		this.action = action;
	}
	
	public ReceiveCreateAccountAction getAction() {
		return action;
	}

	@Override
	public Type<ReceiveCreateAccountEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	@Override
	protected void dispatch(ReceiveCreateAccountEventHandler handler)
	{
		handler.onReceiveCreateAccount(this);
	}
}
