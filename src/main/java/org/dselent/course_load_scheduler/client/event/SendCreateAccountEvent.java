package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendCreateAccountAction;
import org.dselent.course_load_scheduler.client.event_handler.SendCreateAccountEventHandler;
import com.google.gwt.user.client.ui.HasWidgets;

public class SendCreateAccountEvent extends DisplayEvent<SendCreateAccountAction, SendCreateAccountEventHandler>
{
	public static Type<SendCreateAccountEventHandler> TYPE = new Type<SendCreateAccountEventHandler>();

	public SendCreateAccountEvent(SendCreateAccountAction action, HasWidgets container)
	{
		super(action, container);
	}
	
	@Override
	public Type<SendCreateAccountEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	@Override
	protected void dispatch(SendCreateAccountEventHandler handler)
	{
		handler.onCreateAccount(this);
	}
}
