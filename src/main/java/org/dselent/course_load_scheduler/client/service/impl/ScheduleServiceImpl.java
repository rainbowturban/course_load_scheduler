package org.dselent.course_load_scheduler.client.service.impl;

import org.dselent.course_load_scheduler.client.service.ScheduleService;

import com.google.gwt.event.shared.HandlerRegistration;

public class ScheduleServiceImpl extends BaseServiceImpl implements ScheduleService {
	public ScheduleServiceImpl()
	{

	}

	@Override
	public void init()
	{
		bind();
	}

	@Override
	public void bind()
	{
		HandlerRegistration registration;
	}
}
