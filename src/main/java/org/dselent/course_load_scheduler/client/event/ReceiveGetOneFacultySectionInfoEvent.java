package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveGetOneFacultySectionInfoAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveGetOneFacultySectionInfoEventHandler;

import com.google.gwt.event.shared.GwtEvent;

/**
 * Events are "fired" and sent on the event bus to be sent to an applicable event handler
 * This event is for processing an invalid login
 * 
 * @author dselent
 *
 */
public class ReceiveGetOneFacultySectionInfoEvent extends GwtEvent<ReceiveGetOneFacultySectionInfoEventHandler>
{
	public static Type<ReceiveGetOneFacultySectionInfoEventHandler> TYPE = new Type<ReceiveGetOneFacultySectionInfoEventHandler>();

	private ReceiveGetOneFacultySectionInfoAction action;

	public ReceiveGetOneFacultySectionInfoEvent(ReceiveGetOneFacultySectionInfoAction rgfe)
	{
		this.action = rgfe;
	}

	public ReceiveGetOneFacultySectionInfoAction getAction()
	{
		return action;
	}

	@Override
	public Type<ReceiveGetOneFacultySectionInfoEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	@Override
	protected void dispatch(ReceiveGetOneFacultySectionInfoEventHandler handler)
	{
		handler.onReceiveGetOneFacultySectionInfo(this);
	}
}