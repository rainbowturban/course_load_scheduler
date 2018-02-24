package org.dselent.course_load_scheduler.client.service.impl;

import org.dselent.course_load_scheduler.client.event.SubmitRemoveSectionEvent;
import org.dselent.course_load_scheduler.client.service.SectionService;

public class SectionServiceImpl extends BaseServiceImpl implements SectionService{
	public SectionServiceImpl(){}
	
	@Override
	public void init()
	{
		bind();
	}

	@Override
	public void bind()
	{
				
		//eventBusRegistration.put(SubmitNewSectionEvent.TYPE, eventBus.addHandler(SubmitNewSectionEvent.TYPE, this));
		eventBusRegistration.put(SubmitRemoveSectionEvent.TYPE, eventBus.addHandler(SubmitRemoveSectionEvent.TYPE, this));
		
		
	}
	

}
